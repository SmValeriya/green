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
      `./${srcDir}/images/src/*.{jpg,jpeg,png,gif,webp}`,
    ],
    dist: `./${srcDir}/images/build/`,
    watch: `./${srcDir}/images/src/*.{jpg,jpeg,png,gif,webp}`,
  },
  svg: {
    src: `./${srcDir}/images/src/*.svg`,
    dist: `./${srcDir}/images/build/`,
    watch: `./${srcDir}/images/src/*.svg`,
  },
  sprite: {
    src: `./${srcDir}/images/src/icons/*.svg`,
    dist: `./${srcDir}/images/build/`,
    spriteFile: `${srcDir}/images/build/sprite.svg`,
  },
  imagesCopy: {
    src: `./${srcDir}/images/build/**.*`,
    dist: `./${buildDir}/images/`,
  },
};