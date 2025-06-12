# 🚗 ZenDrive

**Status:** _Early alpha – core API live, UI in progress_  
Java • Spring Boot 3 • MongoDB • React (WIP) • Postman

---

## What is ZenDrive?
A learning-driven car-rental platform that pairs a high-performance Spring Boot API with a React front end (coming soon).  
Current focus: clean REST design, rock-solid tests, and real-time vehicle data ingestion.

---

## Key Highlights (so far)

| Area | Details |
|------|---------|
| **Vehicle API** | Serves **120+ live vehicle records** with median latency **\< 60 ms** (local JMH bench). |
| **Data store** | MongoDB Atlas free tier, Spring Data + Lombok records. |
| **RBAC** | JWT-based roles: `ADMIN`, `AGENT`, `CUSTOMER`; fine-grained method security. |
| **Quality** | **100 % branch coverage** on domain + service layers (JUnit 5, Mockito). |
| **Docs / Testing** | Ready-to-run Postman collection in `/postman/ZenDrive.postman.json`. |

---

## Tech Stack

| Layer        | Libraries / Tools |
|--------------|------------------|
| Backend      | Spring Boot 3.2, Spring Security, MapStruct |
| Database     | MongoDB Atlas |
| Build / CI   | Maven Wrapper, GitHub Actions |
| Frontend     | React 18 + Vite _(scaffolding underway)_ |

---

## Quick Start

```bash
git clone https://github.com/Kartikk28/ZenDrive.git
cd ZenDrive/backend
./mvnw spring-boot:run   # API starts on http://localhost:8080
