# all-docker-db

Todas las bases de datos de la materia 'Bases de Datos 2' levantadas con un docker 

# Configuración de Servicios de Bases de Datos con Docker Compose

Este repositorio proporciona un archivo `docker-compose.yml` para configurar y ejecutar cuatro bases de datos diferentes: PostgreSQL, MongoDB, Redis y Neo4j. Este enfoque permite a los estudiantes trabajar con diferentes tecnologías de bases de datos de manera más eficiente y sin necesidad de instalar software adicional, aparte de Docker.

## Requisitos Previos

- **Docker**: Asegúrate de tener Docker instalado en tu máquina. Puedes descargarlo desde [Docker](https://www.docker.com/get-started).

## Instrucciones de Uso

1. **Clonar el Repositorio**: Clona este repositorio en tu máquina local.

    ```bash
    git clone https://github.com/stormakh/all-docker-db.git
    cd all-docker-db
    ```

2. **Iniciar los Servicios**: Utiliza el siguiente comando para levantar todos los servicios.

    ```bash
    docker-compose up -d
    ```

    Esto descargará las imágenes más recientes de PostgreSQL, MongoDB, Redis y Neo4j, y levantará cada servicio en su contenedor correspondiente.

3. **Verificar que los Servicios Están Corriendo**: Ejecuta el siguiente comando para verificar que todos los contenedores estén activos.

    ```bash
    docker-compose ps
    ```

4. **Detener los Servicios**: Para detener todos los servicios, utiliza:

    ```bash
    docker-compose down
    ```

## Información de Conexión para Cada Servicio

### PostgreSQL
- Puerto: 5432
- Usuario: admin
- Contraseña: admin
- Base de datos: testdb

Puedes conectarte a la base de datos utilizando cualquier cliente de PostgreSQL (como psql, PgAdmin, etc.) con las credenciales anteriores.

[Documentación de PostgreSQL](https://www.postgresql.org/docs/)

### MongoDB
- Puerto: 27017

Puedes conectarte a MongoDB utilizando cualquier cliente de MongoDB (como mongo shell, Compass, etc.) en `mongodb://localhost:27017`.

[Documentación de MongoDB](https://docs.mongodb.com/)

### Redis
- Puerto: 6379

Puedes interactuar con Redis utilizando cualquier cliente de Redis, o desde la línea de comandos utilizando `redis-cli`.

[Documentación de Redis](https://redis.io/documentation)

### Neo4j
- Puertos:
  - HTTP: 7474
  - Bolt: 7687
- Credenciales:
  - Usuario: neo4j
  - Contraseña: test

Para acceder a Neo4j, abre tu navegador web y dirígete a [http://localhost:7474](http://localhost:7474). Ingresa las credenciales proporcionadas.

[Documentación de Neo4j](https://neo4j.com/docs/)

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
- Verifica los logs: Usa `docker-compose logs` para revisar los registros de cada contenedor.

**¿Cómo puedo conectarme a cada base de datos?**
Cada servicio está mapeado a su puerto correspondiente en localhost. Usa las credenciales proporcionadas y los clientes recomendados para cada base de datos.