const { exec } = require('child_process');
const args = process.argv.slice(2);
const validServices = ['neo4j', 'postgres', 'mongodb', 'redis'];

if (args.length === 0) {
  console.log('Usage: node run.js <service_name>');
  console.log('Example: node run.js neo4j');
  process.exit(1);
}

const service = args[0];

if (!validServices.includes(service)) {
  console.log(`Invalid service: ${service}`);
  console.log(`Valid services are: ${validServices.join(', ')}`);
  process.exit(1);
}

exec(`docker-compose up -d ${service}`, (err, stdout, stderr) => {
  if (err) {
    console.error(`Error: ${stderr}`);
    process.exit(1);
  }
  console.log(stdout);
});
