import Head from 'next/head'

export default ({ title, description }) =>
  <Head>
    <meta charset='utf-8' />
    <title>{title}</title>
    <meta name='description' content={description} />
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <link 
      rel='shortcut icon' 
      href='/static/favicon.ico' />
    <link 
      rel="stylesheet" href="https://cdn.rawgit.com/twbs/bootstrap/48938155eb24b4ccdde09426066869504c6dab3c/dist/css/bootstrap.min.css" />
    <link
      href='https://fonts.googleapis.com/css?family=Cinzel'
      rel='stylesheet'
    />
    <link
      href='https://fonts.googleapis.com/icon?family=Material+Icons'
      rel='stylesheet'
    />
    <link href='/static/css/style.css' rel='stylesheet' />
  </Head>


