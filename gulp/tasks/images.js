import gulp from "gulp";
import gulpAvif from "gulp-avif";
import webp from "gulp-webp";
import imagemin, { gifsicle, mozjpeg, optipng } from "gulp-imagemin";
import newer from "gulp-newer";
import plumber from "gulp-plumber";
import { paths } from "../config/paths.js";

const { src, dest } = gulp;

export const images = () => {
  return src(paths.images.src)
    .pipe(plumber())
    .pipe(newer(paths.images.dist))
    .pipe(gulpAvif({ quality: 50 }))
    .pipe(dest(paths.images.dist))
    .pipe(src(paths.images.src))
    .pipe(newer(paths.images.dist))
    .pipe(webp())
    .pipe(dest(paths.images.dist))
    .pipe(src(paths.images.src))
    .pipe(newer(paths.images.dist))
    .pipe(imagemin([
      gifsicle({
        optimizationLevel: 3
      }),
      optipng({
        optimizationLevel: 5
      }),
      mozjpeg({
        quality: 75
      })
    ]))
    .pipe(plumber.stop())
    .pipe(dest(paths.images.dist));
};