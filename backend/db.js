const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://rwamala:<wyddug-3denvi-comSij>@adadd-a.bbfmtru.mongodb.net/?retryWrites=true&w=majority&appName=ADADD-A', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
