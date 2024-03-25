# Define base image
FROM node:20

# Define work directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Expose port
EXPOSE 8000

# Run the app
CMD ["node","index.js"]