import "../css/avatar.css";
import { useRef } from "react";

const themeMeta: {
    blue: {
        label: string;
        name: string;
        color: string;
    };
    purple: {
        label: string;
        name: string;
        color: string;
    };
    red: {
        label: string;
        name: string;
        color: string;
    };
    green: {
        label: string;
        name: string;
        color: string;
    };
} = {
    blue: { label: 'TEMA: AZUL', name: 'Azul Quântico', color: '#00f7ff' },
    purple: { label: 'TEMA: LILÁS', name: 'Lilás Psíquico', color: '#d946ef' },
    red: { label: 'TEMA: VERMELHO', name: 'Vermelho Cyber', color: '#ff0055' },
    green: { label: 'TEMA: VERDE', name: 'Verde Matrix', color: '#00ff88' }
};

type Theme = keyof typeof themeMeta;

export default function Avatar() {

    let currentTheme: Theme = 'blue';

    let isGenerating = false;


    function initHologramWireframe(canvas: HTMLCanvasElement | null) {
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const size = canvas.width = canvas.height = 175;
        const radius = 62;
        const center = size / 2;

        const points: {
            x: number
            y: number
            z: number
            lat: number
            lon: number
        }[] = [];
        const latCount = 7;
        const lonCount = 10;

        for (let i = 1; i < latCount; i++) {
            const theta = (i * Math.PI) / latCount;
            for (let j = 0; j < lonCount; j++) {
                const phi = (j * 2 * Math.PI) / lonCount;
                points.push({
                    x: radius * Math.sin(theta) * Math.cos(phi),
                    y: radius * Math.sin(theta) * Math.sin(phi),
                    z: radius * Math.cos(theta),
                    lat: i,
                    lon: j
                });
            }
        }

        let angleY = 0;
        let angleX = 0.2;

        function render() {
            if (!ctx) return;
            ctx.clearRect(0, 0, size, size);

            const activeColor: string = themeMeta[currentTheme] ? themeMeta[currentTheme].color : '#00f7ff';

            const speed = isGenerating ? 0.024 : 0.008;
            angleY += speed;
            angleX += speed * 0.3;

            const cosY = Math.cos(angleY);
            const sinY = Math.sin(angleY);
            const cosX = Math.cos(angleX);
            const sinX = Math.sin(angleX);

            const projected = points.map(p => {
                let x1 = p.x * cosY + p.z * sinY;
                let z1 = -p.x * sinY + p.z * cosY;

                let y2 = p.y * cosX - z1 * sinX;
                let z2 = p.y * sinX + z1 * cosX;

                const scale = 220 / (220 + z2);
                return {
                    px: center + x1 * scale,
                    py: center + y2 * scale,
                    z: z2,
                    scale
                };
            });

            for (let i = 0; i < projected.length; i++) {
                for (let j = i + 1; j < projected.length; j++) {
                    const p1 = projected[i];
                    const p2 = projected[j];

                    const dx = p1.px - p2.px;
                    const dy = p1.py - p2.py;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 42 && (p1.z > -10 || p2.z > -10)) {
                        const alpha = Math.max(0.08, 0.45 * (1 - dist / 42) * ((p1.scale + p2.scale) / 2));
                        ctx.beginPath();
                        ctx.strokeStyle = activeColor;
                        ctx.globalAlpha = alpha;
                        ctx.lineWidth = 0.75;
                        ctx.moveTo(p1.px, p1.py);
                        ctx.lineTo(p2.px, p2.py);
                        ctx.stroke();
                    }
                }
            }

            projected.forEach(p => {
                if (p.z > -30) {
                    const alpha = Math.min(1, Math.max(0.2, (p.z + radius) / (radius * 2)));
                    ctx.beginPath();
                    ctx.arc(p.px, p.py, Math.max(1, 1.8 * p.scale), 0, Math.PI * 2);
                    ctx.fillStyle = activeColor;
                    ctx.globalAlpha = alpha;
                    ctx.fill();
                }
            });

            ctx.globalAlpha = 1;
            requestAnimationFrame(render);
        }

        render();
    }

    const wireframeCanvas = useRef(null);

    initHologramWireframe(wireframeCanvas.current);

    return (
        <div className="holo-chamber">
            <div className="holo-center-stage" id="holo-center-stage">
                {/* <!-- The Floating Female Hologram Container --> */}
                <div className="holo-avatar-holo-wrapper" id="holo-avatar-wrapper">

                    {/* <!-- Outer HUD Tech Radar Rings --> */}
                    <div className="holo-reticle-ring ring-outer"></div>
                    <div className="holo-reticle-ring ring-middle"></div>
                    <div className="holo-reticle-ring ring-dashed"></div>

                    {/* <!-- Avatar Image Container with Holographic Shaders --> */}
                    <div className="holo-avatar-frame">
                        <div className="holo-scanline-overlay"></div>
                        <div className="holo-flicker-layer"></div>
                        <div className="holo-chroma-edge"></div>
                    </div>

                    {/* <!-- Interactive 3D Holographic Constellation Wireframe Canvas --> */}
                    <canvas id="holo-wireframe-canvas" className="holo-wireframe-canvas" ref={wireframeCanvas}></canvas>

                    {/* <!-- Live Emitter Core Signal --> */}
                    <div className="holo-emitter-beacon">
                        <span className="beacon-core"></span>
                        <span className="beacon-wave"></span>
                    </div>
                </div>

            </div>

            <div className="holo-waveform-bars" id="holo-waveform-bars" title="Espectro de voz e sinapse em tempo real">
                <span className="wave-bar"></span>
                <span className="wave-bar"></span>
                <span className="wave-bar"></span>
                <span className="wave-bar"></span>
                <span className="wave-bar"></span>
                <span className="wave-bar"></span>
                <span className="wave-bar"></span>
                <span className="wave-bar"></span>
                <span className="wave-bar"></span>
                <span className="wave-bar"></span>
                <span className="wave-bar"></span>
                <span className="wave-bar"></span>
                <span className="wave-bar"></span>
                <span className="wave-bar"></span>
                <span className="wave-bar"></span>
            </div>
        </div>
    );
}