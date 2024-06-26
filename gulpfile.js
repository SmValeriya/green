import gulp from "gulp";
import { clean } from "./gulp/tasks/clean.js";
import { views } from "./gulp/tasks/views.js";
import { styles } from "./gulp/tasks/styles.js";
import { scripts } from "./gulp/tasks/scripts.js";
import { fonts } from "./gulp/tasks/fonts.js";
import { fontStyle } from "./gulp/tasks/fontStyleFile.js";
import { images } from "./gulp/tasks/images.js";
import { svg } from "./gulp/tasks/svg.js";
import { sprite } from "./gulp/tasks/sprite.js";
import { imagesCopy } from "./gulp/tasks/imagesCopy.js";
import { serve } from "./gulp/tasks/serve.js";
import { reWriteDependencyNames } from './gulp/tasks/revrewrite.js';

const { series, parallel } = gulp;

export {
  clean,
  views,
  styles,
  scripts,
  fonts,
  fontStyle,
  sprite,
  images,
  svg,
  imagesCopy,
  reWriteDependencyNames
};

export default series(
  clean,
  fonts,
  fontStyle,
  parallel(sprite, images, svg),
  parallel(views, styles, scripts, imagesCopy),
  serve
);

export const build = series(
  clean,
  fonts,
  fontStyle,
  parallel(sprite, images, svg),
  parallel(views, styles, scripts, imagesCopy),
  reWriteDependencyNames
)