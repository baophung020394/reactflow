# React Flow Visualization App

This application is a simple visualization tool built using **React** and **React Flow**. It allows users to explore different user flows with a detailed view of various metrics, progress, and descriptions. Each user has a unique set of flows represented by nodes and edges, demonstrating different stages of engagement, notifications, retention, and experiments in a graphical layout.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Demo

![Demo Screenshot](./path/to/your/demo-image.png)

The app provides a visual representation of user workflows, with details about different stages, including metrics like average session duration, time-based notifications, retention rates, and more.

## Features

- **Graphical Visualization**: Displays user flows with nodes and edges to represent different states.
- **Dynamic User Flows**: Each user has a unique set of flows, which includes metrics like engagement, notifications, and retention.
- **Interactive**: Nodes are connected through edges, allowing users to see the flow and relationship between different metrics.
- **Real-time Updates**: Animations on edges to visualize transitions between different nodes.
- **Custom Node Design**: Nodes contain labels, descriptions, progress bars, and statuses that describe the current state of a user’s journey.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/react-flow-visualization.git
    ```
2. Navigate to the project directory:
    ```bash
    cd react-flow-visualization
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```
5. Open your browser and visit `http://localhost:3000` to view the app.

## Usage

1. **View User List**: On the home screen, you will see a list of users. Click on any user to view detailed flows.
2. **Explore Flows**: Once in the user detail view, you can explore various flows represented by nodes. Each node displays specific information about a metric or action related to the user.
3. **Hover Interactions**: Hover over edges to see transitions and relationships between different nodes.
4. **Switch Between Users**: Navigate back to the user list to explore flows for different users.

## Technologies

- **React** - Frontend library for building user interfaces.
- **React Router** - For managing navigation between different pages.
- **React Flow** - For rendering and managing the flow-based diagram.
- **TypeScript** - For type safety and better code maintainability.
- **Tailwind CSS** - For styling and responsive design.

## Contributing

Contributions are welcome! If you have any ideas for improving the app or want to fix a bug, feel free to open a pull request.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.
