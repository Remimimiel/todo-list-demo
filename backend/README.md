1. Download python module

    ```js {.line-numbers}
    pip install -r requirements.txt
    ```

2. Create `backend/mysql.py` and complete the database info.

3. Create corresponding table `todo`

    ```sql {.line-numbers}
    create table todo (
        id int primary key auto_increment,
        content nvarchar(100) not null,
        completed tinyint(1) default 0
    )
    ```

    Execute migration

    ```sh {.line-numbers}
    python manage.py makemigrations
    python manage.py migrate
    ```

4. Run django server

    ```sh {.line-numbers}
    python manage.py runserver
    ```

5. Open browser and visit `http://localhost:8000/todo-list/todo`
