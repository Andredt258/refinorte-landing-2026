from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from rest_framework.decorators import permission_classes
from rest_framework.response import Response


@permission_classes([AllowAny])
class ContactView(APIView):

    def post(self, request, *args, **kwargs):

        name = request.data.get('name', 'No Name')
        email = request.data.get('email', 'No email provided')
        subject = request.data.get('subject', 'No Subject')
        message_body = request.data.get('message', 'No message provided')
        phone = request.data.get('phone', 'No phone provided')
        recipient_email = 'info@fundacionarduvi.org'

        self.send_email(subject, message_body,
                        recipient_email, name, email, phone)
        return Response({'message': 'Email sent successfully'}, status=200)

    def send_email(self, subject, message_body, recipient_email, name, email, phone):
        html_body = f'''
			<html>
			<body>
   			<p>Name: {name}</p>
				<p>Email: {email}</p>
				<p>Phone: {phone}</p>
				<p>{message_body}</p>

			</body>
			</html>
		'''

        email_msg = MIMEMultipart()
        email_msg['Subject'] = subject
        email_msg['From'] = 'web@fundacionarduvi.org'
        email_msg['To'] = recipient_email
        email_msg.attach(MIMEText(html_body, 'html'))

        sender_email = 'web@fundacionarduvi.org'
        password = '.n-#mk^2ULtROUj'

        try:
            with smtplib.SMTP('smtp.titan.email', 587) as server:
                server.starttls()
                server.login(sender_email, password)
                server.send_message(email_msg)
        except Exception as e:
            print(f"Error al enviar el correo: {e}")
