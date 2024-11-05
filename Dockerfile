FROM node:20

# Create app directory
WORKDIR  /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm ci

# Bundle app source
COPY . .

# Generate prisma client
RUN npx prisma generate



# Expose port 8080
EXPOSE 3000

# Start the app
CMD npm run start
