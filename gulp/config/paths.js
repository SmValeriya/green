export const srcDir = "src";
export const buildDir = "build";

export const paths = {
  views: {
    src: `./${srcDir}/pages/*.pug`,
    dist: buildDir,
    watch: `./${srcDir}/pages/**/*.pug`
  },
  styles: {
    src: `./${srcDir}/styles/*.scss`,
    dist: `./${buildDir}/styles/`,
    watch: `./${srcDir}/styles/**/*.scss`
  },
  scripts: {
    src: `./${srcDir}/scripts/*.js`,
    dist: `./${buildDir}/scripts/`,
    watch: `./${srcDir}/scripts/**/*.js`
  },
  fonts: {
    src: `./${srcDir}/fonts/`,
    dist: `./${buildDir}/fonts/`,
    fontFacesFile: `${srcDir}/styles/layout/fonts.scss`,
  },
  images: {
    src: [
      `./${srcDir}/images/*.{jpg,jpeg,png,gif,webp}`,
      `!./${srcDir}/images/favicon/*.{jpg,jpeg,png,gif,tiff}`
    ],
    dist: `./${buildDir}/images`,
    watch: `./${srcDir}/images/*.{jpg,jpeg,png,gif,webp}`,
  },
  svg: {
    src: `./${srcDir}/images/*.svg`,
    dist: `./${buildDir}/images/`,
    watch: `./${srcDir}/images/*.svg`,
  },
  sprite: {
    src: `./${srcDir}/images/icons/*.svg`,
    dist: `./${srcDir}/images`,
    spriteFile: `${srcDir}/images/sprite.svg`,
  }
};