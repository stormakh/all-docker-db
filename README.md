# all-docker-db

Todas las bases de datos de la materia 'Bases de Datos 2' levantadas con Docker.

## Configuración de Servicios de Bases de Datos con Docker Compose

Este repositorio proporciona un archivo `docker compose.yaml` para configurar y ejecutar seis bases de datos diferentes: PostgreSQL, MongoDB, Redis, Neo4j, Cassandra y ObjectDB. Este enfoque permite a los estudiantes trabajar con diferentes tecnologías de bases de datos de manera más eficiente y sin necesidad de instalar software adicional, aparte de Docker.

## Requisitos Previos

- **Docker**: Asegúrate de tener Docker instalado en tu máquina. Puedes descargarlo desde [Docker](https://www.docker.com/get-started).

- **Opcional**: Si tenes Node instalado en tu maquina podes correr los scripts directamente en la terminal con 
```bash
npm run <script name>
```

#### Si *Node* no esta disponible en tu setup
Podes correr cada base de datos directamente desde tu command line con el docker cli.
Por ejemplo queremos levantar Redis y entrar al redis-cli, podemos ejecutar

```bash
docker compose up -d redis
docker compose exec redis redis-cli
```


## Instrucciones de Uso

1. **Clonar el Repositorio**: Clona este repositorio en tu máquina local.

    ```bash
    git clone https://github.com/stormakh/all-docker-db.git
    cd all-docker-db
    ```

2. **Iniciar los Servicios**: Utiliza el comando para levantar todos los servicios.

    ```bash
    docker compose up -d
    ```

    Esto descargará las imágenes más recientes de PostgreSQL, MongoDB, Redis, Neo4j, Cassandra y ObjectDB, y levantará cada servicio en su contenedor correspondiente.

3. **Verificar que los Servicios Están Corriendo**: Ejecuta el siguiente comando para verificar que todos los contenedores estén activos.

    ```bash
    docker compose ps
    ```

4. **Detener los Servicios**: Para detener todos los servicios, utiliza:

    ```bash
    docker compose down
    ```

## Información de Conexión para Cada Servicio

### PostgreSQL
- **Puerto**: 5432
- **Usuario**: admin
- **Contraseña**: admin
- **Base de datos**: testdb

Puedes conectarte a la base de datos utilizando cualquier cliente de PostgreSQL (como psql, PgAdmin, etc.) con las credenciales anteriores.

- [Documentación de PostgreSQL](https://www.postgresql.org/docs/)

### MongoDB
- **Puerto**: 27017

Puedes conectarte a MongoDB utilizando cualquier cliente de MongoDB (como mongo shell, Compass, etc.) en `mongodb://localhost:27017`.

- [Documentación de MongoDB](https://docs.mongodb.com/)

### Redis
- **Puerto**: 6379

Puedes interactuar con Redis utilizando cualquier cliente de Redis, o desde la línea de comandos utilizando `redis-cli`.

- [Documentación de Redis](https://redis.io/documentation)

### Neo4j
- **Puertos**: 
  - **HTTP**: 7474
  - **Bolt**: 7687
- **Credenciales**: 
  - **Usuario**: neo4j
  - **Contraseña**: test

Para acceder a Neo4j, abre tu navegador web y dirígete a [http://localhost:7474](http://localhost:7474). Ingresa las credenciales proporcionadas.

- [Documentación de Neo4j](https://neo4j.com/docs/)

### Cassandra
- **Puerto**: 9042

Puedes conectarte a Cassandra utilizando cualquier cliente de Cassandra (como `cqlsh`) en `localhost:9042`.

- [Documentación de Cassandra](https://cassandra.apache.org/doc/latest/)

### ObjectDB
- **Puerto**: 6136

ObjectDB es un servidor de base de datos orientado a objetos que puede ser accesible en `localhost:6136`. Puedes conectarte utilizando un cliente compatible con ObjectDB.

- [Documentación de ObjectDB](https://www.objectdb.com/java/jpa)

## Uso del Script `run.js` para Acceder a las CLI de las Bases de Datos

El script `run.js` proporciona comandos fáciles para iniciar servicios específicos o acceder a la interfaz de línea de comandos (CLI) de cada base de datos directamente.

### Cómo Utilizar el Script

1. **Para iniciar un servicio específico:**

    ```bash
    node run.js <service_name>
    ```

    - Ejemplo: `node run.js neo4j`

2. **Para acceder a la CLI de un servicio:**

    ```bash
    node run.js <service_name> cli
    ```

    - Ejemplos:
      - `node run.js redis cli` — Abre la CLI de Redis.
      - `node run.js postgres cli` — Abre la CLI de PostgreSQL.
      - `node run.js mongodb cli` — Abre el shell de MongoDB.
      - `node run.js neo4j cli` — Abre el Cypher shell de Neo4j.

### Requisitos

- **Docker** y **Docker Compose** deben estar instalados y en ejecución en tu máquina.
- Los contenedores deben estar corriendo para que el comando `cli` se conecte a las respectivas bases de datos.

## Enlaces Útiles
- [Documentación de Docker](https://docs.docker.com/)
- [Documentación de Docker Compose](https://docs.docker.com/compose/)

## Compatibilidad
Este repositorio está diseñado para ser compatible con múltiples sistemas operativos, incluyendo Windows, macOS y Linux. Solo necesitas tener Docker instalado.

## Notas Adicionales
Para aquellos que usan Docker en Windows sin Make, simplemente ejecuta los comandos proporcionados desde tu terminal preferida (PowerShell o CMD).

## Preguntas Frecuentes

**¿Qué hago si encuentro problemas al ejecutar los servicios?**
- Verifica que Docker esté corriendo: Asegúrate de que el servicio de Docker esté activo.
- Verifica los puertos en uso: Asegúrate de que los puertos utilizados por los servicios no estén en uso por otras aplicaciones.
- Verifica los logs: Usa `docker compose logs` para revisar los registros de cada contenedor.

**¿Cómo puedo conectarme a cada base de datos?**
Cada servicio está mapeado a su puerto correspondiente en localhost. Usa las credenciales proporcionadas y los clientes recomendados para cada base de datos.

---

¡Esperamos que este repositorio sea útil para tus prácticas y estudios! Si tienes sugerencias o encuentras algún problema, no dudes en abrir un issue o contribuir al repositorio.
