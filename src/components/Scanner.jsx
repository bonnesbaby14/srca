import React, { useEffect } from "react";

import Quagga from "quagga";
import "./Scanner.css";

const config = {
  inputStream: {
    name: "Scanner",
    type: "LiveStream",
    numOfWorkers: 4,
    frequency: 10,
    halfSample: true,
    locate: true,
    patchSize: "large", // x-small, small, medium, large, x-large
    debug: {
      showCanvas: true,
      showPatches: true,
      showFoundPatches: true,
      showSkeleton: true,
      showLabels: true,
      showPatchLabels: true,
      showRemainingPatchLabels: true,
      boxFromPatches: {
        showTransformed: true,
        showTransformedBox: true,
        showBB: true,
      },
    },
    area: {
      // defines rectangle of the detection/localization area
      top: "0%", // top offset
      right: "0%", // right offset
      left: "0%", // left offset
      bottom: "0%", // bottom offset
    },
    target: document.querySelector("#interactive"),
    decoder: {
      readers: [
        "ean_reader",
        "ean_8_reader",
        "code_39_reader",
        "code_39_vin_reader",
        "codebar_reader",
        "upc_reader",
        "upc_e_reader",
        "i2of5_reader",
        "2of5_reader",
        "code_93_reader",
        "code_32_reader",
      ],
    },
  },
};

const Scanner = ({ stateEscaner, setCode }) => {
  useEffect(() => {
    Quagga.init(config, (err) => {
      if (err) {
        console.log(err, "error en el scanner msg");
        alert(err);
      }
      Quagga.start();
      return () => {
        Quagga.stop();
      };
    });

    //detecting boxes on stream
    // Quagga.onProcessed((result) => {
    //   var drawingCtx = Quagga.canvas.ctx.overlay,
    //     drawingCanvas = Quagga.canvas.dom.overlay;

    //   if (result) {
    //     if (result.boxes) {
    //       drawingCtx.clearRect(
    //         0,
    //         0,
    //         Number(drawingCanvas.getAttribute("width")),
    //         Number(drawingCanvas.getAttribute("height"))
    //       );
    //       result.boxes
    //         .filter(function (box) {
    //           return box !== result.box;
    //         })
    //         .forEach(function (box) {
    //           console.log("");
    //           Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
    //             color: "green",
    //             lineWidth: 2,
    //           });
    //         });
    //     }

    //     if (result.box) {
    //       Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, {
    //         color: "#00F",
    //         lineWidth: 2,
    //       });
    //     }

    //     if (result.codeResult && result.codeResult.code) {
    //       Quagga.ImageDebug.drawPath(
    //         result.line,
    //         { x: "x", y: "y" },
    //         drawingCtx,
    //         { color: "red", lineWidth: 3 }
    //       );
    //     }
    //   }
    // });

    // Quagga.onDetected(detected);
  }, []);

  const detected = (result) => {
    stateEscaner(false);

    setCode(result.codeResult.code);
    Quagga.stop();
  };

  return (
    // If you do not specify a target,
    // QuaggaJS would look for an element that matches
    // the CSS selector #interactive.viewport
    <div id="interactive" className="viewport" />
  );
};

export default Scanner;
