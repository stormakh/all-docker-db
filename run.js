const { exec } = require('child_process');
const args = process.argv.slice(2);
const validServices = ['neo4j', 'postgres', 'mongodb', 'redis'];

if (args.length === 0) {
  console.log('Usage: node run.js <service_name> [cli]');
  console.log('Examples:');
  console.log('  Start a service: node run.js neo4j');
  console.log('  Access a CLI: node run.js redis cli');
  process.exit(1);
}

const service = args[0];
const isCLI = args[1] === 'cli';

if (!validServices.includes(service)) {
  console.log(`Invalid service: ${service}`);
  console.log(`Valid services are: ${validServices.join(', ')}`);
  process.exit(1);
}

if (isCLI) {
  switch (service) {
    case 'redis':
      exec('docker exec -it redis redis-cli', handleExecCallback);
      break;
    case 'postgres':
      exec('docker exec -it postgres psql -U admin -d testdb', handleExecCallback);
      break;
    case 'mongodb':
      exec('docker exec -it mongodb mongosh', handleExecCallback);
      break;
    case 'neo4j':
      exec('docker exec -it neo4j cypher-shell -u neo4j -p test', handleExecCallback);
      break;
    default:
      console.log(`No CLI available for: ${service}`);
      process.exit(1);
  }
} else {
  exec(`docker-compose up -d ${service}`, handleExecCallback);
}

function handleExecCallback(err, stdout, stderr) {
  if (err) {
    console.error(`Error: ${stderr}`);
    process.exit(1);
  }
  console.log(stdout);
}
