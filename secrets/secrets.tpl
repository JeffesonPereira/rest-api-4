  
 {{ with secret "secret/ambiente/test" }}
  DB_USER: {{ .Data.data.DB_USER }}
  DB_PASSWORD: {{ .Data.data.DB_PASSWORD }}
  DB_HOST: {{ .Data.data.DB_HOST }}
  DB_PORT: {{ .Data.data.DB_PORT }}
  DN_NAME: {{ .Data.data.DN_NAME }}
  {{ end }}
