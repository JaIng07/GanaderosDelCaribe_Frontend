# Instrucciones para lanzar el proyecto "Ganaderos del Caribe"

Para clonar el repositorio desde Azure DevOps y lanzar el proyecto "Ganaderos del Caribe", sigue estos pasos:

1. Obtener la url, username y password desde Azure DevOps:

- Haz clic en el botón "Clone" en el repositorio de Azure DevOps para obtener la url como la siguiente: [https://DevopsEquipoGanadero@dev.azure.com/DevopsEquipoGanadero/Ganaderos%20Del%20Caribe/\_git/Ganaderos_Del_Caribe](https://DevopsEquipoGanadero@dev.azure.com/DevopsEquipoGanadero/Ganaderos%20Del%20Caribe/_git/Ganaderos_Del_Caribe)
- A continuación, debes generar las credenciales. Haz clic en "generate credentials" para obtener el nombre de usuario y la contraseña necesarios.

2. Clona el repositorio utilizando la URL que copiaste en el paso anterior:

```shell
git clone https://DevopsEquipoGanadero@dev.azure.com/DevopsEquipoGanadero/Ganaderos%20Del%20Caribe/_git/Ganaderos_Del_Caribe
```
Asegúrate de utilizar las credenciales generadas en el paso 1 si te solicita una contraseña durante el proceso de clonación.

3. navegar hasta el proyecto clonado

```shell
cd Ganaderos_Del_Caribe
```


3. Instala las dependencias del proyecto:

```shell
yarn
```

3. Inicia el servidor de desarrollo:

```shell
yarn dev
```

Esto iniciará el servidor de desarrollo en `localhost` en un puerto predeterminado (generalmente 5173). Abre tu navegador web y ve a [http://localhost:5173](http://localhost:5173) para ver la aplicación en acción.

4. (Opcional) Para crear una versión optimizada para producción de la aplicación, ejecuta el siguiente comando:

```shell
yarn build
```

Esto generará una carpeta `dist` en tu proyecto con los archivos optimizados listos para ser desplegados en un servidor web.
