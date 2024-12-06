import React, { useEffect, useState } from 'react'
import OneMail from './OneMail'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { database } from '../Firebase'
import { useDispatch, useSelector } from 'react-redux'
import { setEmailData } from '../redux/AllSlice'

function Mails() {

	const dispatch = useDispatch();



	useEffect(() => {
		// sort emails according to time
		const q = query(collection(database, "emails"), orderBy('createdAt', 'desc'));

		// get emails from database
		const unsubscribe = onSnapshot(q, (snapshot) => {
			const allemails = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

			dispatch(setEmailData(allemails))
		})

		// for cleanup , when we close
		return () => unsubscribe();

	}, [])

	const { emaildata, searchMail } = useSelector(store => store.AllSlice);

	// for search a mail
	const [tempMail, setTempMail] = useState(emaildata);


	useEffect(() => {

		const filteredMail = emaildata?.filter((d) => {
			return (
				d?.subject?.toLowerCase().includes(searchMail.toLowerCase()) ||
				d?.to?.toLowerCase().includes(searchMail.toLowerCase()) ||
				d?.message?.toLowerCase().includes(searchMail.toLowerCase())
			)
		})

		setTempMail(filteredMail);

	}, [searchMail, emaildata])

	return (
		<div>
			{tempMail && tempMail?.map((d, i) => <OneMail email={d} key={i} />)}
		</div>
	)
}

export default Mails