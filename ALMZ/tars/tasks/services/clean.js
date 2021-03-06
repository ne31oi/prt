'use strict';

const gulp = tars.packages.gulp;
const del = tars.packages.del;
const preProcName = tars.cssPreproc.name;
const preprocExtension = tars.cssPreproc.mainExt;
const spritesCssPath = `./markup/${tars.config.fs.staticFolderName}/${preProcName}/sprites-${preProcName}`;

let pathsToDel = [
    './dev/',
    `${spritesCssPath}/sprite_96.${preprocExtension}`,
    `${spritesCssPath}/svg-fallback-sprite.${preprocExtension}`,
    `${spritesCssPath}/svg-sprite.${preprocExtension}`,
    './.tmpTemplater/',
    './.tmpPreproc/'
];

/**
 * Clean dev directory and cache
 */
module.exports = () => {
    if (!tars.config.useBuildVersioning && !tars.options.watch.isActive) {
        pathsToDel.push(tars.options.build.path);
    }

    return gulp.task('service:clean', done => {
        del(pathsToDel).then(() => {
            done();
        });
    });
};
