# Parashu 🪓 : Your Ultimate AI-Powered News App

Parashu is an innovative news platform that seamlessly blends Artificial Intelligence with journalism excellence. The backend is powered by Ruby on Rails, providing robust API endpoints, while the frontend is crafted with React to offer an immersive user experience. Parashu allows users to explore news, save articles, and interact with intelligent features that enrich their understanding of the world.

## Features

### Intelligent News Management

Parashu offers advanced news management features, allowing users to:

- **User Authentication:** Secure user authentication system ensures data privacy.
- **Article Saving:** Users can save articles of interest for later reading.
- **AI-Driven Summarization:** Utilizes AI to summarize articles for quick insights.
- **Future Prospects:** Exciting upcoming features include personalized recommendations, interactive quizzes, and real-time news updates.

  ## Get the guided tour of our app features
  - Using [AI ChatBot](https://scribehow.com/shared/How_to_use_Parashu_Bot__tsxrMHbwSiKCAEXNdENJcg)
  - Using [Get Context](https://scribehow.com/shared/Accessing_and_Exploring_a_Context_of_a_News_Article__emoKBjaKRoCVNsEpPAmQJw) Feature
  - Using [Drag and Drop](https://scribehow.com/shared/How_to_Navigate_and_Use_Parashus_Drag_and_Drop_Feature__lbOORNk2S8yTBcLvJNBFLQ) Feature

## Getting Started

These instructions will guide you through setting up and running Parashu on your local machine for development and testing purposes.

### Prerequisites

- **Ruby:** Ensure you have Ruby installed. Recommended version: 2.7.4
- **Rails:** Install Rails, the backend framework. Recommended version: 6.1.4
- **Node.js:** Required for managing JavaScript packages. Recommended version: 14.16.1
- **PostgreSQL:** Database system. Recommended version: 13.3

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/PreethamNaik12/parashu
   cd parashu-news-app
   ```

2. Install Ruby dependencies:
   ```
   bundle install
   ```

3. Install JavaScript dependencies:
   ```
   yarn install
   ```

4. Create and migrate the database:
   ```
   rails db:create
   rails db:migrate
   ```

5. Start the Rails server:
   ```
   rails s
   ```

The Rails backend is now running on [http://localhost:3000](http://localhost:3000).

## API Documentation

For API documentation and endpoints, refer to the [API Documentation](https://www.postman.com/interstellar-comet-634512/workspace/bits/request/29242271-dda96ebe-6140-4add-ae1c-c99854a85a71) file.

## Deployment

Server and the Client have to depoloyed seperately.
Parashu Server can be easily deployed to cloud platforms like Render, Heroku or AWS.Parashu Client can be deployed to cloud platforms like Vercel, Netlify or Github Pages. 
Ensure to set up the necessary environment variables (such as API keys) in your production environment.

## Support and Contributions

For bug reports, issues, or feature requests, please create an [issue](https://github.com/PreethamNaik12/parashu/issues).

---

**Parashu - Where Artificial Intelligence Meets Journalism Excellence.**

*Frontend documentation is available in the [client folder](https://github.com/PreethamNaik12/parashu/tree/master/client).*
