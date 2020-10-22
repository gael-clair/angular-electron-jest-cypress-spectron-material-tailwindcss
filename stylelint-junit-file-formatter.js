const styleLintJunitFormatter = require('stylelint-junit-formatter');
const makeDir = require('make-dir');
const path = require('path');
const fs = require('fs');

const stylelintConfigFile = '.stylelintrc.json';
const defaultReportName = 'style.xml';

module.exports = (results) => {
  let finalReportPath = path.join(__dirname, defaultReportName);

  const config = require(`./${stylelintConfigFile}`);
  const outputPath = (config && config['junit-formatter'] && config['junit-formatter'].outputPath) || null;
  try {
    if (outputPath) {
      const { dir } = path.parse(outputPath);
      if (!fs.existsSync(dir)) {
        makeDir.sync(dir);
      } else {
        if (fs.existsSync(outputPath)) {
          fs.unlinkSync(outputPath);
        }
      }
      finalReportPath = outputPath;
      const report = styleLintJunitFormatter(results);
      fs.writeFileSync(path.resolve(finalReportPath), report);
    }
  } catch (err) {
    // tslint:disable-next-line
    console.error(`Error while getting 'outputPath' parameter from configuration file '${stylelintConfigFile}'`, err);
    process.exit(1);
  }
};
