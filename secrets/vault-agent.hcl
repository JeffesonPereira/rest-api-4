pid_file = "./vault-agent.pid"

auto_auth {
  method "approle" {
    mount_path = "auth/approle"

    config = {
      role_id_file_path = "./secrets/role_id"      
      secret_id_file_path = "./secrets/secret_id"
      remove_secret_id_file_after_reading = false
    }
  }
  
  sink "file" {
    config = {
      path = "./secrets/.vault-token"
    }
  }
}

listener "tcp" {
  address = "127.0.0.1:8100"
  tls_disable = 1
}

vault {
  address = "localhost:8200"
}

template {
  source      = "secrets.tpl"
  destination = ".env"
}

