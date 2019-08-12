1. Download required python module.

    ```js {.line-numbers}
    pip install -r requirements.txt
    ```

2. Create `backend/db.py` and complete the database info.

3. If you connect to the MySQL for the first time, create corresponding table `todo` first.

    ```sql {.line-numbers}
    create table todo (
        id int primary key auto_increment,
        content nvarchar(100) not null,
        completed tinyint(1) default 0
    )
    ```

    Then you should execute migration.

    ```sh {.line-numbers}
    python manage.py makemigrations
    python manage.py migrate
    ```

4. Run django server.

    ```sh {.line-numbers}
    python manage.py runserver
    ```

5. Open browser and visit `http://localhost:8000/todo-list/todo`.
