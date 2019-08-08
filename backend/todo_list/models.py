from django.db import models


class Todo(models.Model):
    content = models.CharField(max_length=100)
    completed = models.BooleanField(default=False)

    class Meta:
        managed = False
        db_table = 'todo'
