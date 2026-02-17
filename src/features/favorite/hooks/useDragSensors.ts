import { MouseSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";

export function useDragSensors() {

    // ドラッグ設定
    return useSensors(
        // PC用
        useSensor(MouseSensor, {
            activationConstraint: {
                distance: 3,
            },
        }),
        // スマホ用
        useSensor(TouchSensor, {
            activationConstraint: {
                delay: 150,
                tolerance: 10,
            },
        })
    );
}
