import gulp from "gulp";
import { paths } from "../config/paths.js";

const { src, dest } = gulp;

export const imagesCopy = () => {
  return src(paths.imagesCopy.src)
    .pipe(dest(paths.imagesCopy.dist));
};