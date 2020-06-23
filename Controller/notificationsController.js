var Notifications = require('../models/notifications');
var Users = require('../models/users');

exports.get_notificatons = function(req, res, next) {
    let user_id = req.user.toJSON()._id;
    let skip = parseInt(req.query.skip);
    let limit = parseInt(req.query.count);

    Notifications.find({ created_by: user_id }).sort({ created_at: -1 }).limit(limit).skip(skip).exec(async (err, notifications) => {
        if(err) {
            console.log(err);
            res.status(400).send({message: 'Error Occured, cannot fetch notifications'});
            return;
        }

        Users.updateOne({ _id: user_id }, { $set: { "notifications.notification_count": 0 } }).then(user => {
            res.status(200).send({notifications});
            return;
        }).catch(err => {
            console.log(err);
            res.status(400).send({message: 'Error Occured, cannot fetch notifications'});
            return;
        })

    })

}

exports.update_notification = function(req, res, next) {
    Notifications.updateOne({ "_id": req.params.notificationId }, { $set: { seen: true } }).then(notification => {
        res.status(200).send({message: 'Notification seen'});
		return;
    }).catch(err => {
        console.log(err);
        res.status(400).send({message: 'Error Occured, cannot update notification status'});
		return;
    })
}
