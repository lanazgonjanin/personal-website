import Image from "next/image";

const repositoryUrl = "https://github.com/lanazgonjanin/parallax";

export function TrajectoryVisualization({ onEnlarge }: { onEnlarge?: () => void }) {
  return (
    <figure className="trajectory-result forest-demo-panel">
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
          Trajectory comparison over the first 1,000 frames of KITTI sequence 00, showing the original
          baseline and temporal rotation-corrected estimate against ground truth.
        </p>
        <div className="trajectory-result-links">
          <a href={repositoryUrl} rel="noreferrer" target="_blank">
            View project on GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </figcaption>
    </figure>
  );
}
