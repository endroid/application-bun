import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { css, cx, keyframes } from "hono/css";
import { BaseLayout } from "./layouts/base";

const app = new Hono();

app.use("/*", serveStatic({ root: "./public" }));

const bodyStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  & {
    background: #000;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
`;

const wrapStyle = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const revealAnimation = keyframes`
  0% { opacity: 0; letter-spacing: 0.6em; filter: blur(10px); }
  100% { opacity: 1; letter-spacing: 0.2em; filter: blur(0); }
`;

const flickerAnimation = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
`;

const logoStyle = css`
  font-family: "Helvetica Neue", Arial, sans-serif;
  font-size: clamp(2rem, 8vw, 7rem);
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #fff;
  white-space: nowrap;
  text-shadow:
    0 0 20px rgba(255, 255, 255, 0.3),
    0 0 60px rgba(255, 255, 255, 0.1);
  animation: ${revealAnimation} 2s ease-out forwards;
  opacity: 0;

  & span {
    display: inline-block;
    animation: ${flickerAnimation} 4s ease-in-out infinite alternate;
  }
  & span:nth-child(2) {
    animation-delay: 0.3s;
  }
  & span:nth-child(3) {
    animation-delay: 0.6s;
  }
  & span:nth-child(4) {
    animation-delay: 0.1s;
  }
  & span:nth-child(5) {
    animation-delay: 0.5s;
  }
  & span:nth-child(6) {
    animation-delay: 0.2s;
  }
  & span:nth-child(7) {
    animation-delay: 0.7s;
  }
`;

const lineStyle = css`
  position: absolute;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.15),
    transparent
  );
  width: 60vw;
  left: 50%;
  transform: translateX(-50%);
`;

const lineTopStyle = css`
  top: -1rem;
`;

const lineBottomStyle = css`
  bottom: -1rem;
`;

function HomePage() {
  return (
    <BaseLayout title="Endroid" bodyClass={bodyStyle}>
      <div class={wrapStyle}>
        <div class={cx(lineStyle, lineTopStyle)} />
        <div class={logoStyle}>
          <span>E</span>
          <span>N</span>
          <span>D</span>
          <span>R</span>
          <span>O</span>
          <span>I</span>
          <span>D</span>
        </div>
        <div class={cx(lineStyle, lineBottomStyle)} />
      </div>
    </BaseLayout>
  );
}

app.get("/", (c) => {
  return c.html(<HomePage />);
});

app.get("/status", (c) => {
  return c.json({ status: "ok" });
});

export default app;
