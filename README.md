# Contact Form Backend

This is the backend part of a contact form application built with Spring Boot. The application allows users to send messages through a contact form, which are then sent to a specified email address.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Configuration](#configuration)
- [Testing](#testing)
- [License](#license)

## Technologies Used

- **Java** - Programming language used to build the application.
- **Spring Boot** - Framework for creating the RESTful web services.
- **Spring Data JPA** - Used for data persistence.
- **H2 Database** - In-memory database for testing.
- **Spring Boot Starter Mail** - For sending emails.
- **Maven** - Dependency management and build tool.

## Getting Started

### Prerequisites

- Java JDK 17
- Maven
- An email account (e.g., Gmail) for sending emails.

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd contactform
Navigate to the project directory and build the application:

bash
Copy code
mvn clean install
Configure your application.properties file with your email credentials and SMTP server settings:

properties
Copy code
spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=your_email@gmail.com
spring.mail.password=your_password
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=true
Run the application:

bash
Copy code
mvn spring-boot:run
The backend will run on http://localhost:8080.

API Endpoints
Send Contact Message
POST /api/contact
Request Body:

json
Copy code
{
  "name": "Your Name",
  "email": "your_email@example.com",
  "message": "Your message here"
}
Response:

200 OK - Email sent successfully.
500 Internal Server Error - If there's an error sending the email.
Configuration
Ensure that your email account allows "less secure apps" if using Gmail.
Modify CORS settings if accessing from a different frontend application.
Testing
You can test the email sending functionality using Postman or any other API testing tool.

License
This project is licensed under the MIT License - see the LICENSE file for details.

markdown
Copy code

### Instructions to Add the `README.md` to Your Project

1. Create a new file named `README.md` in the root of your project directory (inside the `contactform` folder).
2. Copy and paste the above content into the `README.md` file.
3. Replace `<your-repo-url>` with your actual Git repository URL and update your email credentials in the `application.properties` section.
4. Save the file.

This will give you a comprehensive documentation file for your backend project. Let me know if you need any changes!
