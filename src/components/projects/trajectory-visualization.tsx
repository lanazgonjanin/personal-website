import Image from "next/image";

const resultUrl =
  "https://github.com/lanazgonjanin/parallax/blob/main/results/temporal_rotation_correction_1000.png";
const repositoryUrl = "https://github.com/lanazgonjanin/parallax";

export function TrajectoryVisualization({ onEnlarge }: { onEnlarge?: () => void }) {
  return (
    <figure className="trajectory-result forest-demo-panel">
      <div className="forest-demo-header">
        <div>
          <span>PROJECT RESULT</span>
          <strong>Temporal Rotation Correction: 1,000 Frames</strong>
        </div>
        <span>STATIC RESULT</span>
      </div>

      <div className="trajectory-result-frame">
        {onEnlarge ? (
          <button aria-label="Enlarge original trajectory plot" className="trajectory-enlarge" onClick={onEnlarge} type="button">
            <Image
              alt="Trajectory comparison plot showing KITTI ground truth, the original baseline, and temporal rotation correction over the first 1,000 frames"
              height={1554}
              sizes="(min-width: 900px) 58vw, 100vw"
              src="/images/parallax-temporal-rotation-correction-1000.png"
              width={1547}
            />
            <span>Enlarge plot</span>
          </button>
        ) : (
          <Image
            alt="Trajectory comparison plot showing KITTI ground truth, the original baseline, and temporal rotation correction over the first 1,000 frames"
            height={1554}
            sizes="(min-width: 900px) 58vw, 100vw"
            src="/images/parallax-temporal-rotation-correction-1000.png"
            width={1547}
          />
        )}
      </div>

      <figcaption className="trajectory-result-caption">
        <p>
          Comparison of the original trajectory and temporal rotation-corrected estimate against
          KITTI ground truth over 1,000 frames.
        </p>
        <div className="trajectory-result-links">
          <a href={resultUrl} rel="noreferrer" target="_blank">
            View original plot <span aria-hidden="true">↗</span>
          </a>
          <a href={repositoryUrl} rel="noreferrer" target="_blank">
            View repository <span aria-hidden="true">↗</span>
          </a>
        </div>
      </figcaption>
    </figure>
  );
}
