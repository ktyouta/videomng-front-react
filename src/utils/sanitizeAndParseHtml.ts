import DOMPurify from 'dompurify';
import parse, { HTMLReactParserOptions } from 'html-react-parser';

export function sanitizeAndParseHtml(html: string, options?: HTMLReactParserOptions) {

    const safeHtml = DOMPurify.sanitize(html, {
        USE_PROFILES: { html: true },
    });

    return parse(safeHtml, options);
}