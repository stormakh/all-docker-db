const { spawn, execSync } = require("child_process");
const os = require("os");

try {
  execSync("docker info", { stdio: "ignore" });
} catch (error) {
  console.error("Docker is not running or not installed.");
  process.exit(1);
}

const args = process.argv.slice(2);
const validServices = [
  "neo4j",
  "postgres",
  "mongodb",
  "redis",
  "cassandra",
  "objectdb",
];

if (args.length === 0) {
  console.log("Usage: node run.js <service_name|all> [start|stop|cli]");
  console.log("Examples:");
  console.log("  Start a service: node run.js neo4j start");
  console.log("  Stop a service: node run.js neo4j stop");
  console.log("  Access a CLI: node run.js redis cli");
  console.log("  Start all services: node run.js all start");
  console.log("  Stop all services: node run.js all stop");
  process.exit(1);
}

const service = args[0];
const command = args[1] || "start";

if (service !== "all" && !validServices.includes(service)) {
  console.log(`Invalid service: ${service}`);
  console.log(`Valid services are: ${validServices.join(", ")}, or 'all'`);
  process.exit(1);
}

// Detect the platform and set the shell option accordingly
let shellOption;
if (os.platform() === "win32") {
  shellOption = true; // Use CMD.EXE on Windows
} else {
  shellOption = "/bin/bash"; // Use Bash on UNIX-like systems
}

const spawnOptions = { stdio: "inherit", shell: shellOption, cwd: __dirname };

switch (command) {
  case "start":
    if (service === "all") {
      spawn("docker-compose", ["up", "-d"], spawnOptions);
    } else {
      spawn("docker-compose", ["up", "-d", service], spawnOptions);
    }
    break;
  case "stop":
    if (service === "all") {
      spawn("docker-compose", ["stop"], spawnOptions);
    } else {
      spawn("docker-compose", ["stop", service], spawnOptions);
    }
    break;
  case "cli":
    if (service === "all") {
      console.log("CLI access is not available for 'all' services.");
      process.exit(1);
    }
    switch (service) {
      case "redis":
        spawn("docker", ["exec", "-it", "redis", "redis-cli"], spawnOptions);
        break;
      case "postgres":
        spawn(
          "docker",
          ["exec", "-it", "postgres", "psql", "-U", "admin", "-d", "testdb"],
          spawnOptions
        );
        break;
      case "mongodb":
        spawn("docker", ["exec", "-it", "mongodb", "mongosh"], spawnOptions);
        break;
      case "neo4j":
        spawn(
          "docker",
          [
            "exec",
            "-it",
            "neo4j",
            "cypher-shell",
            "-u",
            "neo4j",
            "-p",
            "test1234",
          ],
          spawnOptions
        );
        break;
      case "cassandra":
        spawn("docker", ["exec", "-it", "cassandra", "cqlsh"], spawnOptions);
        break;
      case "objectdb":
        spawn("docker", ["exec", "-it", "objectdb", "objectdb"], spawnOptions);
        break;
      default:
        console.log(`No CLI available for: ${service}`);
        process.exit(1);
    }
    break;
  default:
    console.log(`Invalid command: ${command}`);
    console.log("Valid commands are: start, stop, cli");
    process.exit(1);
}
