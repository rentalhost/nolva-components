"use client";

import Script from "next/script";

declare global {
  interface Window {
    VLibras: {
      Widget: new () => void;
    };
  }
}

function VLibrasComponent() {
  return (
    <>
      {/* @ts-expect-error 2322 */}
      <div vw="" className="enabled">
        <div vw-access-button="" className="active" />

        <div vw-plugin-wrapper="">
          <div className="vw-plugin-top-wrapper" />
        </div>
      </div>

      <Script
        src="https://vlibras.gov.br/app/vlibras-plugin.js"
        strategy="lazyOnload"
        onReady={() => {
          // eslint-disable-next-line no-new
          new window.VLibras.Widget();

          window.onload?.(new Event("load"));
        }}
      />
    </>
  );
}

export { VLibrasComponent as VLibras };
