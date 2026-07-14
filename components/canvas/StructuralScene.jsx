"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const GOLD = "#A99A78";
const TEAL = "#245F61";

// Intersecting rectangle frames — the brand's geometric motif
const RECT_SPECS = [
  { w: 4.4, h: 2.8, rot: [0, 0, 0], strong: true },
  { w: 3.6, h: 3.6, rot: [0, Math.PI / 3.2, 0], strong: true },
  { w: 4.8, h: 2.2, rot: [Math.PI / 5, 0, Math.PI / 10], strong: true },
  { w: 2.9, h: 4.2, rot: [0, -Math.PI / 3.6, Math.PI / 14], strong: false },
  { w: 5.4, h: 1.7, rot: [-Math.PI / 6, Math.PI / 7, 0], strong: false },
];

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const fn = (e) => setReduced(e.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);
  return reduced;
}

function StructuralGroup() {
  const group = useRef();
  const reduced = useReducedMotion();

  // Build geometries once
  const { frames, nodesGeo, latticeGeo } = useMemo(() => {
    const corners = [];
    const frames = RECT_SPECS.map((s) => {
      const hw = s.w / 2;
      const hh = s.h / 2;
      const pts = [
        new THREE.Vector3(-hw, -hh, 0),
        new THREE.Vector3(hw, -hh, 0),
        new THREE.Vector3(hw, hh, 0),
        new THREE.Vector3(-hw, hh, 0),
      ];
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      const euler = new THREE.Euler(...s.rot);
      pts.forEach((p) => corners.push(p.clone().applyEuler(euler)));
      return { geo, rot: s.rot, strong: s.strong };
    });

    const nodesGeo = new THREE.BufferGeometry().setFromPoints(corners);

    // Deterministic sparse lattice between nearby corners (no Math.random —
    // keeps renders stable and avoids hydration-adjacent churn)
    const latticePts = [];
    for (let i = 0; i < corners.length; i++) {
      for (let j = i + 1; j < corners.length; j++) {
        const d = corners[i].distanceTo(corners[j]);
        if (d > 1.2 && d < 2.6 && (i + j) % 3 === 0) {
          latticePts.push(corners[i], corners[j]);
        }
      }
    }
    const latticeGeo = new THREE.BufferGeometry().setFromPoints(latticePts);

    return { frames, nodesGeo, latticeGeo };
  }, []);

  useFrame((state) => {
    const g = group.current;
    if (!g) return;
    const t = state.clock.elapsedTime;
    const scrollV =
      typeof window !== "undefined" ? window.scrollY * 0.0006 : 0;
    const drift = reduced ? 0 : t * 0.06;

    const targetY = state.pointer.x * 0.35 + drift + scrollV;
    const targetX = -state.pointer.y * 0.22 - scrollV * 0.6;

    g.rotation.y += (targetY - g.rotation.y) * 0.045;
    g.rotation.x += (targetX - g.rotation.x) * 0.045;
    if (!reduced) g.position.y = Math.sin(t * 0.5) * 0.12;
  });

  return (
    <group ref={group}>
      {frames.map((f, i) => (
        <lineLoop key={i} geometry={f.geo} rotation={f.rot}>
          <lineBasicMaterial
            color={GOLD}
            transparent
            opacity={f.strong ? 0.85 : 0.28}
          />
        </lineLoop>
      ))}
      <points geometry={nodesGeo}>
        <pointsMaterial color={TEAL} size={0.09} sizeAttenuation />
      </points>
      <lineSegments geometry={latticeGeo}>
        <lineBasicMaterial color={GOLD} transparent opacity={0.28} />
      </lineSegments>
    </group>
  );
}

export default function StructuralScene() {
  return (
    <Canvas
      className="!absolute inset-0"
      camera={{ position: [0, 0, 9], fov: 42 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      aria-hidden="true"
    >
      <StructuralGroup />
    </Canvas>
  );
}
