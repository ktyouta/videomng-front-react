// ボタンのホバー時の背景色
export const BUTTON_HOVER_BG_COLOR = "rgba(37, 99, 235, 0.18)";

// ボタンのホバー時のアクセントカラー(ラベル文字色等)
export const BUTTON_HOVER_ACCENT_COLOR = "#7abaff";

// アイコンの円形背景色（ページ背景上に表示するアイコン用）
export const ICON_CIRCLE_BG_COLOR = "#3a3d42";

// アイコンの円形背景色（サムネイル画像上に重ねて表示するアイコン用）
// このアイコンはサムネイル画像の外側（暗いページ背景側）にはみ出す位置に配置されるため、
// 半透明色ではなくICON_CIRCLE_BG_COLORと同じ不透明色にして、どちらの背景でも視認できるようにする
export const THUMBNAIL_ICON_CIRCLE_BG_COLOR = ICON_CIRCLE_BG_COLOR;

// アイコンの円形背景の直径（継承したfont-sizeを1として、アイコンの周りに余白を持たせる倍率）
export const ICON_CIRCLE_DIAMETER_EM = "1.8em";

// 削除等の危険操作を示す色（ボタン・警告文言で共通使用）
export const DANGER_COLOR = "#eb3941";
