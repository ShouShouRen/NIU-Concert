import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { useRef, useEffect } from "react";

export interface Sponsor {
  name: string;
  logo: string;
  link: string;
  level?: string;
}

function getSpherePositions(count: number, radius: number) {
  // 均勻分布在球面
  const positions = [];
  for (let i = 0; i < count; i++) {
    const phi = Math.acos(-1 + (2 * i) / count);
    const theta = Math.sqrt(count * Math.PI) * phi;
    positions.push([
      radius * Math.cos(theta) * Math.sin(phi),
      radius * Math.sin(theta) * Math.sin(phi),
      radius * Math.cos(phi),
    ]);
  }
  return positions;
}

const Sponsor3DWall = ({ sponsors = [] }: { sponsors: Sponsor[] }) => {
  const positions = getSpherePositions(sponsors.length, 5);
  const canvasWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = canvasWrapperRef.current;
    if (!wrapper) return;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
    };
    wrapper.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      wrapper.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div ref={canvasWrapperRef} style={{ width: "100%", height: "100%" }}>
      <Canvas
        camera={{ position: [0, 0, 15], fov: 50 }}
        style={{ background: "transparent", borderRadius: 0 }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <OrbitControls
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.7}
          enableZoom={false}
        />
        {positions.map((pos, idx) => (
          <group
            position={pos as [number, number, number]}
            key={sponsors[idx].name}
          >
            <Html center>
              <a
                href={sponsors[idx].link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textDecoration: "none",
                  width: 180,
                  height: 90,
                }}
              >
                <img
                  src={sponsors[idx].logo}
                  alt={sponsors[idx].name}
                  style={{
                    objectFit: "contain",
                    borderRadius: 12,
                    boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
                    background: "#fff",
                    padding: 8,
                    marginBottom: 8,
                    transition: "transform 0.2s",
                  }}
                />
                <span
                  style={{
                    color: "#e64141",
                    fontWeight: "bold",
                    fontSize: 18,
                    background: "rgba(255,255,255,0.8)",
                    borderRadius: 6,
                    padding: "2px 8px",
                  }}
                >
                  {sponsors[idx].name}
                </span>
              </a>
            </Html>
          </group>
        ))}
      </Canvas>
    </div>
  );
};

export default Sponsor3DWall;
