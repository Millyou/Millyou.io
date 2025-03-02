---
head:
  - - link
    - name: canonical
      content: https://g5guide.github.io/developers/make_plugin.html
---
# MSD HMI(생산) 자료 수집 및 제어 프로그램

PLC를 통해 자료를 수집하고 제어하며, 생산 공정에서의 효율성을 극대화하기 위해 설계되었습니다. 주요 구성 요소는 아래와 같습니다.
-	컨베이어 벨트 상태 모니터링 및 제어
-	온도 센서 데이터 수집 및 제어
-	인버터 제어를 통한 온도 조정
-	시간 데이터 시각화

경로를 지정하여 내려받기 (`MyFolder` 폴더명 예시)
::: info Git 주소
```bash
git clone https://github.com/Millyou/MES_Project.git MyFolder
```
::: 

 ## 1️⃣ 기술 스택

Winform 사용된 기술 스택입니다.

| **카테고리**        | **기술/라이브러리**                         | **설명**                            |
|-----------------|----------------------------------------|----------------------------------------------|
| 언어            | C#                                    | 주요 프로그래밍 언어                          |
| 아키텍처 패턴    | MVP                            | 뷰와 비즈니스 로직을 분리해 유지보수성과 확장성을 높이고, 테스트 용이성을 제공  |
| 통신 방식       | REST API                              | 서버 송수신                                   |
| 실시간 통신     | MQTT.Net                              | MQTT 프로토콜 기반 실시간 통신                |
| PLC 통신    | RS485 / 모드버스                            |     PLC 자료 수집 및 제어를 위한 직렬 통신           |
| ORM             | Dapper                                | 경량 ORM, 데이터베이스 쿼리 처리              |
| Serialization   | Newtonsoft.Json                       | JSON 직렬화/역직렬화                          |
| 데이터베이스    | PostgreSQL                            | 데이터 관리                                   |

## 2️⃣ 주요 화면 및 기능

생산 모니터링 및 PLC제어 시스템을 위한 화면을 다음과 같이 구성하였습니다.

| 화면           | 설명                                   | 세부 기능                                      |
|----------------|--------------------------------------|-----------------------------------------------|
| **로그인 화면**  | 사용자 인증 및 권한 관리                 | - 사용자 정보 입력<br>- 권한 확인 및 로그인 처리 |
| **생산 모니터링** | 생산성 실시간 상태 확인 및 PLC제어         | - **생산 공정**: 생산 실시간 모니터링<br>- **PLC 제어**: 셋팅온도 제어<br>- **PLC 제어**: 생산 시작 및 종료(컨베이어) 제어 |




## 3️⃣ 고도화 전략
| **카테고리**                         | **전략/요소**                   | **설명**                                                                                                                                                                                                                                 |
|--------------------------------------|---------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **아키텍처 고도화**                  | MVVM 강화                       | View, ViewModel, Model 간 역할 분리를 재점검하고, DI(Dependency Injection)나 Event Aggregator 등의 패턴을 활용해 모듈화를 강화하여 유지보수성과 확장성을 높임                                                                                  |
| **성능 최적화 및 병목 제거**         | UI 렌더링 최적화                | 대량의 데이터 바인딩, 무거운 애니메이션 등 프레임률 저하를 일으키는 요소를 식별하고 가상화(VirtualizingStackPanel), Data Virtualization 등을 활용해 성능을 개선                                                                                |
|                                      | 네트워크 안전성 확보            | TLS/SSL을 적용하고 방화벽 정책과 암호화된 통신 프로토콜을 사용하여 데이터 전송 구간을 안전하게 관리                                                                                                                                          |
| **운영·배포 자동화(DevOps) 도입**    | 지속적 통합/지속적 배포(CI/CD)  | GitHub Actions, Azure DevOps, Jenkins 등을 이용해 빌드·테스트·배포 과정을 자동화함으로써 릴리스 사이클을 단축                                                                                                                             |
|                                      | 버전 관리 정책                  | ClickOnce나 MSIX 같은 배포 방식을 통해 업데이트 편의성을 높이고, 롤백이 용이하도록 버전 히스토리를 체계적으로 관리                                                                                                                           |

## 🙂 기대 효과
::: tip 
**생산성 향상**:
   - 실시간 모니터링 및 사이클타임 계산으로 공정 최적화.
   - 효율적인 생산계획 및 일일계획 수립을 통해 작업 성과 개선.

**품질 개선**:
   - 비전 검사 시스템으로 불량품 식별 및 빠른 문제 해결.
   - 데이터 기반 분석으로 불량률 감소와 품질 목표 달성 지원.

**운영 효율성 증대**:
   - MQTT와 RabbitMQ를 활용한 신속한 데이터 통신으로 공정 운영 효율화.
   - 통합 시스템을 통한 작업 간소화 및 비용 절감.

**보안 강화**:
   - JWT 인증으로 사용자별 데이터 접근 보안 강화.
   - RestAPI를 활용한 안전하고 신뢰성 높은 데이터 전송 구현.

**확장성 및 유연성**:
   - Restful API와 메시지 브로커 구조로 기능 확장이 용이.
   - 다양한 클라이언트와 연동 가능하여 미래 기술 적용에도 유연하게 대처.
:::
---



