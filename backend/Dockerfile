FROM node:16

WORKDIR /src/index

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy the rest of the application code
COPY ./src ./src

# Expose the port the app runs on
EXPOSE 5000

# Command to run the application
CMD ["node", "src/index.js"]