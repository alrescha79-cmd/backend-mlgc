
# Submission Belajar Penerapan Machine Learning dengan Google Cloud

Project Akhir Belajar Penerapan Machine Learning dengan Google Cloud Bangkit Academy 2024 Batch 1
Membuat API atau  aplikasi backend untuk mengintegrasikannya model machine learning

## Run Locally

Clone the project

```bash
  git clone https://github.com/alrescha79-cmd/backend-mlgc.git
```

Go to the project directory

```bash
  cd backend-mlgc
```

Install dependencies with npm

```bash
  npm install
```

Install dependencies with pnpm

```bash
  pnpm install
```

Start the dev

```bash
  npm run start:dev
```

Start the server

```bash
  npm run start
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MODEL_URL= 'Link-to-your-model'`



## Deploy to Cloud Run

Set the default project for your Cloud Run service:
```bash
gcloud config set project <PROJECT_ID>

```

In your source code directory, deploy from source using the following command:
```bash
gcloud run deploy <name-your-project> --port <PORT> --source .

```



## Authors

- [@Anggun Caksono](https://github.com/alrescha79-cmd/)

