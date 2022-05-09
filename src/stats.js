const chalk = require('chalk');

const arrayTemplate = (arrayLinks) => {
    console.log(chalk.green.bold(`\n |      lINKS ENCONTRADOS:     | \n`));
    arrayLinks.forEach(link => {
        console.log(chalk.green.bold(` ▷ href:  ${chalk.cyan(link.href)}   \n ▷ text:  ${chalk.magenta(link.text)} \n ▷ fileName: ${chalk.blackBright(link.fileName)} \n ---- `));
    })
};

const statusTemplate = (arrayLinks) => {
    console.log(chalk.green.bold(`       |  LINK STATUS:  |  `));
    arrayLinks.forEach(link => {
        if (link.status === 200) {
            console.log(chalk.green.bold(`▷ href: ${chalk.cyan(link.href)} \n▷ status: ${chalk.cyanBright.bold(link.status)} \n▷ ok: ${chalk.magentaBright.bold(link.ok)}\n ---`));
        } else {
            console.log(chalk.green.bold(`▷ href: ${chalk.cyan(link.href)} \n▷ status: ${chalk.cyanBright.bold(link.status)} \n▷ fail: ${chalk.redBright.bold(link.ok)}\n --- \n`));
        }
    })
}

const totalLinks = (arraylinks) => {
    const totalArray = arraylinks.map(link => link.href);
    const uniqueLinks = [...new Set(totalArray)];
    const brokenLinks = arraylinks.filter(link => link.status != 200)
    return `${chalk.magenta.bold(`
    |     ESTADISTICAS   |
            `)}
    ${chalk.green.bold(`\t▷ Total:${totalArray.length} \n\t▷ Unique:${uniqueLinks.length}\n\t▷ Broken:${brokenLinks.length} --- `)}
    `
};

module.exports = {
    arrayTemplate,
    statusTemplate,
    totalLinks,
    
}