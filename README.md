# Backend Infra

Aplikasi backend untuk tes di PT.Infra Solusi Indonesia

## Requirements
1. Node.JS v16
2. Postman
3. Docker
4. VSCode
5. MYSQL

## Endpoint

**POST**

`http://localhost:3000/users` add blacklist user

Output:
```
{
  "message": "Data user berhasil ditambahkan"
}
```

or if exist

```
{
    "message": "Data user sudah ada"
}
```

**GET**

`http://localhost:3000/users` get all blacklist users

Output:
```
{
    "data": [
        {
            "nik": 12345,
            "nama": "Andi",
            "tempat": "Jakarta",
            "tanggal_lahir": "2000-01-01"
        }
    ]
}
```

**GET**

`http://localhost:3000/users/12345` get detail blacklist user by match nik

Body

```
{
    "nama": "Andis",
    "tempat": "Jakartas",
    "tanggal_lahir": "2000-01-02"
}
```

Output:
```
{
    "status": "blacklist"
}
```

**GET**

`http://localhost:3000/users/1234` get detail blacklist user by match nama, tempat, tanggal lahir

Body

```
{
    "nama": "Andi",
    "tempat": "Jakarta",
    "tanggal_lahir": "2000-01-01"
}
```

Output:
```
{
    "status": "blacklist"
}
```

**GET**

`http://localhost:3000/users/1234` get detail blacklist user by not match all

Body

```
{
    "nama": "Andis",
    "tempat": "Jakartas",
    "tanggal_lahir": "2000-01-02"
}
```

Output:
```
{
    "status": "clear"
}
```

**PUT**

`http://localhost:3000/users/1234` update blacklist user by nik 12345

Body

```
{
    "nama": "Aldo",
    "tempat": "Tangerang",
    "tanggal_lahir": "2010-10-10"
}
```

Output:
```
{
    "message": "Data user berhasil diupdate"
}
```

**DELETE**

`http://localhost:3000/users/12345` delete blacklist user by nik 12345

Output:
```
{
    "message": "Data user berhasil dihapus"
}
```
