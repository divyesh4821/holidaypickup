const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

// 1. Create User
exports.createUser = functions.https.onRequest(async (req, res) => {
  try {
    const { name, email } = req.body;
    const userRef = await db.collection("users").add({ name, email });
    res.status(201).json({ id: userRef.id, ...req.body });
  } catch (error) {
    res.status(500).send(error);
  }
});

// 2. Get All Users
exports.getUsers = functions.https.onRequest(async (req, res) => {
  try {
    const usersSnapshot = await db.collection("users").get();
    const users = usersSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

// 3. Get User by ID
exports.getUser = functions.https.onRequest(async (req, res) => {
  try {
    const userId = req.params.userId; 
    const userDoc = await db.collection("users").doc(userId).get();

    if (!userDoc.exists) {
      res.status(404).send("User not found");
    } else {
      res.status(200).json({ id: userDoc.id, ...userDoc.data() });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// 4. Update User
exports.updateUser = functions.https.onRequest(async (req, res) => {
  try {
    const userId = req.params.userId;
    const { name, email } = req.body;
    await db.collection("users").doc(userId).update({ name, email });
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
});

// 5. Delete User
exports.deleteUser = functions.https.onRequest(async (req, res) => {
  try {
    const userId = req.params.userId; 
    await db.collection("users").doc(userId).delete();
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).send(error);
  }
});

// ... (Deploy instructions in next step) 