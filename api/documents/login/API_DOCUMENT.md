# Post data with correctness of Email and Password

## POST /api/login

Data in header

| Header | Value |
| - | - |
| Content-Type | application/json |

Data in body/payload of HTTP Request

```
{
    "email": "test@email.com",
    "password": "testpassword"
}
```
## Expectation

| Assert | Expected |
| - | - |
| StatusCode | 200 |

# Post data with correctness of Email and Incorrectness Password

## POST /api/login

Data in header

| Header | Value |
| - | - |
| Content-Type | application/json |

Data in body/payload of HTTP Request

```
{
    "email": "test@email.com",
    "password": "testpassd"
}
```
## Expectation

| Assert | Expected |
| - | - |
| StatusCode | 400 |

# Post data with Incorrectness of Email and Incorrectness Password

## POST /api/login

Data in header

| Header | Value |
| - | - |
| Content-Type | application/json |

Data in body/payload of HTTP Request

```
{
    "email": "tessst@email.com",
    "password": "testpassd"
}
```
## Expectation

| Assert | Expected |
| - | - |
| StatusCode | 400 |


