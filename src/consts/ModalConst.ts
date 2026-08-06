// モーダル内部レイアウトのフォントサイズ（モバイル）
export const MODAL_TITLE_FONT_SIZE_MOBILE = "12px";

// モーダル内部レイアウトのフォントサイズ（タブレット縦向き）
export const MODAL_TITLE_FONT_SIZE_TABLET_PORTRAIT = "13px";

// モーダル内部レイアウトのフォントサイズ（タブレット横向き・PC）
export const MODAL_TITLE_FONT_SIZE_LARGE = "16px";

// ModalHeader/ModalFooterの区切り線色（ダーク背景用。白ベースの淡い色でないと黒背景に同化して見えなくなる）
export const MODAL_DIVIDER_COLOR_DARK = "rgba(255, 255, 255, 0.08)";

// ModalHeader/ModalFooterの区切り線色（ライト背景用。黒ベースの淡い色でないと明るい背景に同化して見えなくなる）
export const MODAL_DIVIDER_COLOR_LIGHT = "rgba(0, 0, 0, 0.08)";

// ModalHeaderのアイコンとタイトルの間隔
export const MODAL_HEADER_ICON_GAP = "10px";

// ModalHeader/ModalFooterの上下padding
export const MODAL_SECTION_PADDING = "32px";

// ModalBody内の要素間隔
export const MODAL_BODY_GAP = "16px";

// ModalFooter内のボタン間隔
export const MODAL_FOOTER_BUTTON_GAP = "12px";

// ModalPortalの背景グラデーション
export const MODAL_BACKGROUND_GRADIENT = "linear-gradient(180deg, #22252c, #1a1c22)";

// ModalPortalの縁（白系の淡いグロー/リング。オーバーレイがほぼ黒のため黒い影は機能しない）
export const MODAL_GLOW_SHADOW = "0 0 0 1px rgba(255, 255, 255, 0.08), 0 0 24px rgba(255, 255, 255, 0.06)";

// ModalPortalの閉じるボタンのサイズ（モバイル）
export const MODAL_CLOSE_ICON_SIZE_MOBILE = "15px";

// ModalPortalの閉じるボタンのサイズ（タブレット・PC）
export const MODAL_CLOSE_ICON_SIZE_LARGE = "22px";

// ModalPortalConfirm（削除・更新確認等）の共通ライト配色
export const CONFIRM_MODAL_CONTAINER_STYLE = {
    backgroundColor: "#e0e0e0",
    borderRadius: "20px",
    border: "solid 1px",
    color: "black",
} as const;

// ModalBody/ModalHeaderのテキスト色（ダーク背景用）
export const MODAL_TEXT_COLOR_DARK = "white";

// ModalBody/ModalHeaderのテキスト色（ライト背景用）
export const MODAL_TEXT_COLOR_LIGHT = "black";
