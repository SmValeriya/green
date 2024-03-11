import gulp from "gulp";
import { existsSync } from "fs";
import svgo from "gulp-svgo";
import svgSprite from "gulp-svg-sprite";
import plumber from "gulp-plumber";
import { paths } from "../config/paths.js";
import { svgoPluginsSprite } from "../config/svgConfig.js";

const { src, dest } = gulp;

export const sprite = (done) => {
  const spriteFile = existsSync(paths.sprite.spriteFile);
  if (spriteFile) {
    done();
    return;
  }
  return src(paths.sprite.src)
    .pipe(plumber())
    .pipe(svgo(svgoPluginsSprite))
    .pipe(svgSprite({
      mode: {
        symbol: {
          sprite: '../sprite.svg',
          example: false,
        }
      }
    }))
    .pipe(plumber.stop())
    .pipe(dest(paths.sprite.dist));
};