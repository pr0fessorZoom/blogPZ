// contentlayer.config.js
import { makeSource, defineDocumentType } from "@contentlayer/source-files";
var Doc = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "**/*.md",
  fields: {
    title: {
      type: "string"
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content"
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-W2TLYVYS.mjs.map
