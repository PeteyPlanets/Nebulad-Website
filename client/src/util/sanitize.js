import DOMPurify from "dompurify";

const sanitizeContent = (content) => {
  return DOMPurify.sanitize(content);
};

export default sanitizeContent;
