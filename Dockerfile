# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Install PM2 globally
RUN npm install -g pm2

# Copy the rest of your app's source code
COPY . .

# Change ownership of the app directory
RUN chown -R node:node /app

# Switch to the non-root user
USER node

# Expose the port
EXPOSE 3000

# Command to run your app using PM2
CMD ["pm2-runtime", "start", "app.js", "--name", "my-express-app"]
